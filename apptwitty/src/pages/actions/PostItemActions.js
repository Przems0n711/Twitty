import React from 'react';
import { connect } from 'react-redux';
import { createPost, addReaction } from './postsActions';

class PostItemActions extends React.Component {
    state = {
        postId: '',
        reaction: '',
    }

    handleAddReaction = () => {
        const { postId, reaction } = this.state;
        const addReactionAction = new AddReaction(postId, reaction);
        addReactionAction.add();
    }

    // ... other component methods here ...

    render() {
        return (
            <div>
                {/* ... render post content here ... */}
                <button onClick={this.handleAddReaction}>Add Reaction</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post))
});

export default connect(null, mapDispatchToProps)(PostItemActions);