import React from 'react';
import Image from "next/image";
import Advertisement from "@/components/common/Advertisement";

const Home = () => {
    const featuredPost = {
        image: '/assets/images/post_1_thumbnail.jpg',
        category: 'Technology',
        title: 'The Impact of Technology on the Workplace: How Technology is Changing',
        author: {
            image: '/assets/images/author_1.jpg',
            name: 'Jason Francisco'
        },
        createdAt: 'August 20, 2022'
    }

    return (
        <div className="container w-full h-full mt-6">
            {featuredPost && (
                <div className="relative w-full h-[600px]">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover"/>
                    </div>
                    <div
                        className="absolute max-w-[600px] left-16 -bottom-16 bg-white p-10 rounded-xl overflow-hidden shadow-xl">
                        <div className="w-max rounded-md bg-blue-600 font-medium text-white text-sm py-1 px-2.5">
                            {featuredPost.category}
                        </div>
                        <div className="text-4xl font-semibold mt-4">
                            {featuredPost.title}
                        </div>
                        <div className="flex items-center mt-6 text-zinc-400">
                            <div className="flex items-center">
                                <div className="relative rounded-full w-9 h-9 overflow-hidden">
                                    <Image src={featuredPost.author.image} alt={featuredPost.author.name} fill/>
                                </div>
                                <div className="ml-3 font-medium">
                                    {featuredPost.author.name}
                                </div>
                            </div>
                            <div className="ml-4">
                                {featuredPost.createdAt}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className={`${featuredPost ? 'mt-40' : ''} flex justify-center`}>
                <Advertisement image={"/assets/images/advertisement.png"} alt={"Advertisement"}/>
            </div>
        </div>
    );
};

export default Home;
