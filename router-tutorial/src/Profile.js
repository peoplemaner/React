const data = {
    louis: {
        name: 'Louis',
        description: 'React Programmer'
    },
    alice: {
        name: 'Alice',
        description: 'Korea Actor'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) return <div>Not exist User</div>
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;