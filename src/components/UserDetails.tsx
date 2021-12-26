import React from 'react'
import './UserDetails.css'
import { User } from '../types'
import IconLocation from '../svg/IconLocation'
import IconWebsite from '../svg/IconWebsite'
import IconTwitter from '../svg/IconTwitter'
import IconCompany from '../svg/IconCompany'

type UserDetailsProps = {
  user: User
}

export function UserDetails({ user }: UserDetailsProps) {
  const joinDate = new Date(user.created_at).toLocaleString('en-US', {
    dateStyle: 'medium',
  })

  return (
    <section className="UserDetails">
      <div>
        <img
          className="UserDetails-avatar"
          src={user.avatar_url}
          width="117"
          height="117"
          alt={user.login}
        />
      </div>
      <div>
        <div className="UserDetails-header">
          <img
            className="UserDetails-mobileavatar"
            src={user.avatar_url}
            alt={user.login}
          />
          <div className="UserDetails-header-details">
            <div className="UserDetails-name-wrapper">
              <h2 className="UserDetails-name">{user.name}</h2>
              <time className="UserDetails-joindate" dateTime={user.created_at}>
                Joined {joinDate}
              </time>
            </div>
            <span className="UserDetails-username">@{user.login}</span>
            <time
              className="UserDetails-mobilejoindate"
              dateTime={user.created_at}
            >
              Joined {joinDate}
            </time>
          </div>
        </div>
        <p className="UserDetails-bio">
          {user.bio ?? (
            <span style={{ opacity: 0.75 }}>This profile has no bio</span>
          )}
        </p>
        <ul className="UserDetails-stats">
          <li className="UserDetails-stat">
            <h3 className="stat-title">Repos</h3>
            <span className="stat-value">{user.public_repos}</span>
          </li>
          <li className="UserDetails-stat">
            <h3 className="stat-title">Followers</h3>
            <span className="stat-value">{user.followers}</span>
          </li>
          <li className="UserDetails-stat">
            <h3 className="stat-title">Following</h3>
            <span className="stat-value">{user.following}</span>
          </li>
        </ul>
        <div className="UserDetails-footer">
          <ul className="UserDetails-footer-details">
            <li
              className="footer-detail-item"
              title="Location"
              style={{ opacity: user.location ? 1 : 0.5 }}
            >
              <IconLocation />
              <span>{user.location ?? 'Not available'}</span>
            </li>
            <li
              className="footer-detail-item"
              title="Blog"
              style={{ opacity: user.blog ? 1 : 0.5 }}
            >
              <IconWebsite />
              <span>
                {user.blog ? (
                  <a href={user.blog}>{user.blog}</a>
                ) : (
                  'Not available'
                )}
              </span>
            </li>
            <li
              className="footer-detail-item"
              title="Twitter username"
              style={{ opacity: user.twitter_username ? 1 : 0.5 }}
            >
              <IconTwitter />
              <span>
                {user.twitter_username ? (
                  <a href={`https://twitter.com/${user.twitter_username}`}>
                    {user.twitter_username}
                  </a>
                ) : (
                  'Not available'
                )}
              </span>
            </li>
            <li
              className="footer-detail-item"
              title="Company"
              style={{ opacity: user.company ? 1 : 0.5 }}
            >
              <IconCompany />
              <span>{user.company ?? 'Not available'}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
