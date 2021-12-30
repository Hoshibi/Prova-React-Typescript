export function isValidEmail(email:string){
    var regex = new RegExp('^[\\w+.]+@[\\w]+\\.(?:\\w{2,})(?:\\.\\w{2})?$');
    return regex.test(email);
}