export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion(question, author, authedUser){
	const {id,
		optionOne,
		optionTwo,
		timestamp} = question
		const author_id = question.author
	const {avatarURL} = author
	const hasReplied = optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)
	
	return {
		id,
		optionOne,
		optionTwo,
		hasReplied,
		author_id,
		avatar: avatarURL,
		timestamp,
	}
}