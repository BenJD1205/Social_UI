import React from 'react';
import './rightbar.css';
import {Users} from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Poster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return(
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">HCM city</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Dong Nai </span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                    <h4 className="rightbarTitle">User friends</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img 
                                className="rightbarFollowingImg" 
                                src="assets/person/1.jpeg"
                                alt=""
                            />
                            <span className="rightbarFollowingName">Phuong Bich Tran</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img 
                                className="rightbarFollowingImg" 
                                src="assets/person/1.jpeg"
                                alt=""
                            />
                            <span className="rightbarFollowingName">Phuong Pham</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img 
                                className="rightbarFollowingImg" 
                                src="assets/person/1.jpeg"
                                alt=""
                            />
                            <span className="rightbarFollowingName">Phuong Lan</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img 
                                className="rightbarFollowingImg" 
                                src="assets/person/1.jpeg"
                                alt=""
                            />
                            <span className="rightbarFollowingName">Huy Pham</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img 
                                className="rightbarFollowingImg" 
                                src="assets/person/1.jpeg"
                                alt=""
                            />
                            <span className="rightbarFollowingName">Hung Nguyen</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img 
                                className="rightbarFollowingImg" 
                                src="assets/person/1.jpeg"
                                alt=""
                            />
                            <span className="rightbarFollowingName">Thuy Tien</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
