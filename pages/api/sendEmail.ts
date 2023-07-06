'use server';
import { httpResponseStatus } from '@/libs/enums';
import { HttpStatusCode } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import nodeMailer from 'nodemailer'
export default function handler(request:NextApiRequest , response:NextApiResponse){
  const data = request.body;
    const transporter = nodeMailer.createTransport({
        pool: true,
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use TLS
        auth: {
          user: process.env.SENDER_EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASSWORD,
        },
    })
    transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          response.status(HttpStatusCode.InternalServerError).json({status:httpResponseStatus.ERROR,messsage:'error in running mail service'})
        } else {
          console.log("Server is ready to send email");
        }
      });
      transporter.sendMail({
        to: process.env.RECIVER_EMAIL_ADDRESS, // list of receivers
        subject: data.subject ? data.subject : 'without subject', // Subject line
        text: ((data.name) + '--' + (data.mobile) + '--' + (data.email) + '\r\n' + (data.text)), // plain text body
      }).then(res => {
        console.log('email sent');
        response.status(HttpStatusCode.Ok).json({messsage:'email sent'})
      }).catch(err => {
        console.log(err);
        response.status(HttpStatusCode.InternalServerError).json({messsage:'error in sending email'})
      })
}