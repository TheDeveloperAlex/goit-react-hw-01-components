

const Profile = ({ avatar, name, tag, location, stats }) => {
    // console.log(avatar, name, tag, location, stats);
    return (
        <section>
            <h1>Profile</h1>
            <div>
                <div>
                    <img src={avatar} alt="avatar" />
                    <p>{name}</p>
                    <p>@{tag}</p>
                    <p>{location}</p>
                </div>
                <ul>
                    <li><span>Followers</span> <span>{stats.followers}</span></li>
                    <li><span>Views</span> <span>{stats.views}</span></li>
                    <li><span>Likes</span> <span>{stats.likes}</span></li>
                </ul>
            </div>
        </section>
        

    )
}

export default Profile;