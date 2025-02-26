class Livre {
    #titre
    #auteur
    #anneePublication
    #disponible

    /**
     * @param {String} titre -
     * @param {String} auteur
     * @param {Number} anneepublication
     * @param {Boolean} disponible 
     */
    constructor(titre, auteur, anneePublication, disponible = true){
        this.#titre = titre
        this.#auteur = auteur
        this.#anneePublication = anneePublication
        this.#disponible = disponible
    }

    get titre(){
        return this.#titre;
    }

    get disponibility(){
        return this.#disponible
    }

    emprunter(){
        this.#disponible === true ? this.#disponible = false : null;
    }

    rendre(){
        this.#disponible = true;
    }

}

class Utilisateur {
    /**
     * @param {String} nom
     * @param {Array} livreEmpruntes
    */
    constructor(nom, livreEmpruntes =[]){
        this.nom = nom;
        this.livreEmpruntes = livreEmpruntes;
    }
}