export function checkNumber(value: string): boolean | string {
    if (isNaN(Number(value))) {
      return "must be number.";
    } else {
      return true;
    }
  }