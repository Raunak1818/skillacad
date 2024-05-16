function fetchLinkedInProfile(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const profiles={
                1:{name:'John',title:'Software Engineer'},
                2: {name:'Jane', title:'data Science'},
            }
            const profile=profiles [userId];
            if (profiles){
                resolve(profile)
            }
            else{
                reject('not found')
            }
        }, 1000);
    })
}

async function displayLinkedInprofile(userId){
    try{
        console.log('Fetching LinkedIn Profile');
        const profile=await fetchLinkedInProfile(userId);
        console.log('Linked profile',profile);
        console.log(`name:${profile.name} and title:${profile.title}`);
    }
    catch(error){
        console.log(e);
    }
}
displayLinkedInprofile(2);