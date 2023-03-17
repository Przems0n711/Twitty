
const posts = async (req, res) => {
    const resposne = {
        success: true,
        posts: [
            {
                id: 1,
                category: 'Fizyka',
                text: 'No elo elo'
            },
            {
                id: 2,
                category: 'Chemia',
                text: 'No elo elo'
            }
        ],
    };
    
    return res.status(200).json(resposne);
};

module.exports = {
    posts,
};