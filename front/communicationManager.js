
export async function getProbes() {
    const response = await fetch('http://127.0.0.1:1337/api/tests',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer a63cadd90d1cbc549966934103895d03cb2ea90f22ff04f3ae3eea150163a1c65d4159e598f280982988fa2733516489f58840ec9465d23a913d3594ccfeaf1a606719fb0e51c07dae7895e362609d05105d07cb72ca3471e7cd4a647c19708c4faffe9f26b597ab653de495815e1ece2252f7f6ca7a5054fc6e5ea4637d6a4b'
        },

    });
    const data = await response.json();
    return data.data;
}

export async function getProba(id) {
    const response = await fetch(`http://127.0.0.1:1337/api/tests/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer a63cadd90d1cbc549966934103895d03cb2ea90f22ff04f3ae3eea150163a1c65d4159e598f280982988fa2733516489f58840ec9465d23a913d3594ccfeaf1a606719fb0e51c07dae7895e362609d05105d07cb72ca3471e7cd4a647c19708c4faffe9f26b597ab653de495815e1ece2252f7f6ca7a5054fc6e5ea4637d6a4b'
        },

    });
    const data = await response.json();
    return data.data;
}
