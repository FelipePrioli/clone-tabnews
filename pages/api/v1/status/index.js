function status(request, response) {
  response.status(200).json({ chave: "Função tóp" });
}

export default status;
