import { Post } from "@/types/post";
import { User } from "@/types/user";


const BASE_URL = 'https://jsonplaceholder.typicode.com';

//fetch all users
export const getUsers = async()=>{
    try{
        const response = await fetch(`${BASE_URL}/users`, {cache: 'no-store'});

        if(!response.ok) {
            throw new Error("Failed to fetch users")
        }
        const users: User[] = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

//fetch posts by user id
export const getPostsByUserId = async(userId:number)=>{
    try{
        const response = await fetch(`${BASE_URL}/posts?userId=${userId}`, {cache: 'no-store'});

        if(!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const posts: Post[] = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}