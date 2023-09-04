import { NextApiRequest, NextApiResponse } from "next";
import { userService } from "./user/user.service";

export class storageController {
    private user: userService
    private req: NextApiRequest
    private res: NextApiResponse
    constructor(user: userService, req: NextApiRequest, res: NextApiResponse) {
        this.user = user
        this.req = req
        this.res = res
    }

    async getUser() {
        this.user.get().then(res => {
            this.res.status(200).json(res)
        }).catch(error => {
            console.log(error);
        })
    }
}