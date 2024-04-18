

export async function searchPicturesByPage(page:number) {
    try{
        const result = await fetch(`https://api.unsplash.com/photos/?client_id=${import.meta.env.UNPLASHKEY}&page=${page}`);
        const data = await result.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}