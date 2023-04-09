import React from 'react'

export default function Details(props) {
return (
    
<div >
    <div class="flex flex-col items-center p-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.details.avatar_url} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.details.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{props.details.bio}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <div className=" justify-evenly text-white py-3">
                { (props.details.email!=null) ?
                    <p>Location: {props.details.email}</p>:
                    <p></p>
                }
                { (props.details.location!=null) ?
                <p>Location: {props.details.location}</p>:
                <p></p>
                }
                { (props.details.blog!=null) ?
                    <p>Blog: {props.details.blog}</p>:
                    <p></p>
                }
                <div className="p-3">
                    <div className="flex flex-col justify-between gap-2">
                        <div className="flex flex-row justify-evenly gap-5">
                            <p class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.details.public_repos} Repos</p>
                            <p class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.details.public_gists} Gists</p>
                        </div>
                        <div className="flex flex-row justify-evenly gap-5">
                            <p  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.details.followers} Followers</p>
                            <p  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.details.following} Following</p>
                        </div>
                    </div>
                </div>
                <a href={props.details.html_url} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Github</a>
            </div>
        </div>
    </div>
</div>

);
}