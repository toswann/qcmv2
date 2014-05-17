/**
 * Created by swann on 16/05/2014.
 */

// global with accounts-base & accounts-password meteor package translation
ACCOUNTS_FR_GLOBAL = {
    "You've been logged out by the server Please login again": "Vous avez été déconnecté par le serveur. Merci de vous reconnecter.",
    "Your session has expired. Please login again.": "Votre session a expirée. Merci de vous reconnecter.",
    "User validation failed": "User validation failed",
    "Email already exists.": "Cette adresse email est déjà enregistrée.",
    "Email doesn't match the criteria.": "Email invalide.",
    "User not found": "Utilisateur non existant",
    "User has no password set": "L'utilisateur n'a pas de password définie",
    "Incorrect password": "Mot de passe incorrect.",
    "Must be logged in": "Vous devez être connecté",
    "Invalid verifier": "Verificateur invalide",
    "Token expired": "Expiration du token",
    "Token has invalid email address": "Le token a une email adresse invalide.",
    "Verify email link expired": "Le lien de vérification a expiré",
    "Verify email link is for unknown address": "Le lien de vérification est pour une adresse inconue",
    "Need to set a username or email": "Vous devez définir un email.",
    "Signups forbidden": "Connexion interdite."
};

ACCOUNTS_FR = function(message) {
    return ACCOUNTS_FR_GLOBAL[message] ? ACCOUNTS_FR_GLOBAL[message] : message;
}
