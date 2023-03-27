const posts = async (req, res) => {
    const response = {
        success: true,
        posts: [
            {
                id: 1,
                category: 'Math',
                text: 'Lorem ipsum 1'
            },
            {
                id: 2,
                category: 'PE',
                text: 'Lorem ipsum 2'
            }
        ],
    };

    return res.status(200).json(response);
};

module.exports = {
    posts,
};