const SentenceReducer = (sentence, action) => {
    switch (action.type) {
        case 'BLACK':
            return "“If you want me to be the dark night so you can be the stars, I will swallow you all”"
        case 'BLUE':
            return "“Because the sky is blue, it makes me cry"
        case 'GREEN':
            return "“Colorless green ideas sleep furiously."
            default:
                throw new Error(`Unsupported action type ${action.type}`)
    }
}

export default SentenceReducer
