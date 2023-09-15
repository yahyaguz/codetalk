export default (errorCode) => {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz E-Posta Adresi"
        case "auth/invalid-login":
            return "Geçersiz giriş"
        case "auth/email-already-exists":
            return "Kullanıcı zaten kayıtlı"
        case "auth/user-not-found":
            return "Kullanıcı bulunamadı"
        case "auth/weak-password":
            return "Parola çok zayıf"
        case "auth/wrong-password":
            return "Hatalı parola"
        default:
            return errorCode;
    }
}