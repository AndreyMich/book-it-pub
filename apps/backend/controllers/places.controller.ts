/*
* method for retrieving places
* */
export async function getPublicPlaces(req,res){
    res.status(200).send("public places");
}

export async function getPrivatePlaces(req,res){
    const userId = req.user.id;
    res.status(200).send(`private places ${userId}`);
}