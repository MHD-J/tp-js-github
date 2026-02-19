function infosEtudiant(nom, note) {
    let status = (note >= 10) ? "Admis" : "Ajourné";
    return nom + ": " + note + "/20 => " + status;
}

console.log(infosEtudiant("Hiba", 14));
