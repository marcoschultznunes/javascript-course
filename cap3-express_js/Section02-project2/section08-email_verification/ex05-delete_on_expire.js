/* If the verification date has expired and the user try to login, he will be deleted, so
that his email can be used to create another account.
*/
if(expiration.getTime() < now.getTime()){
    user.deleteOne().catch(error => {
        return res.status(500).send('Verification failed')
    })

    return res.status(401).send({error: {message: 'Verification expired. Try signing up again.'}})
}
