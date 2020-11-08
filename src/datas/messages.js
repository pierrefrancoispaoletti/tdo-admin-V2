export const errorMessages = [{
  loginError: {
    header: 'Il y a une erreur dans vos identifiants',
    content: 'Votre mot de passe et/ou votre login contient une erreur',
  },
  postError: {
    header: 'Il y a une erreur dans votre formulaire',
    content: 'Tous les champs de ce formulaire sont obligatoires',
  },
  postingError: {
    header: 'Il y a eu un probléme',
    content: 'Il y a eu un probléme lors de l\'ajout de votre plat, veuillez reessayer !',
  },
  editingError: {
    header: 'Il y a eu un probléme',
    content: 'Il y a eu un probléme lors de la modification de votre plat, veuillez reessayer !',
  },
  deletingError: {
    header: 'Il y a eu un probléme',
    content: 'Il y a eu un probléme lors de la suppression de votre plat, veuillez reessayer !',
  },
  serverError: {
    header: 'Il y a eu une erreur lors de la soumission',
    content: 'Une erreur est intervenue lors de la soumission de vos données, veuillez reessayer',
  },
}];

export const successMessages = [{
  postSuccess: {
    header: 'Ajout éfféctué avec succés',
    content: 'Votre plat a été ajouté avec succés !',
  },
  editSuccess: {
    header: 'Modification éfféctuée avec succés',
    content: 'Votre plat a été Modifié avec succés !',
  },
  deleteSuccess: {
    header: 'Suppression éfféctuée avec succés',
    content: 'Votre plat a été Supprimé avec succés !',
  },
}];
