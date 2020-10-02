const INITIAL_STATE = {
        sections: [
            {
                title: "hats",
                url:'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/116489152_698837994009511_4517128739971803652_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=107&_nc_ohc=v4kjHIa4k9MAX92xJnm&_nc_tp=19&oh=e83ee6fb21de4df71dfe037100c8c4c8&oe=5F90F35E',
                id: 1,
                linkURL:"hats"
            },
            {
                title: "jackets",
                url:'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/44761041_331042257680133_6829354668432816694_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=109&_nc_ohc=bFDGVEG0uGQAX9DVsPa&_nc_tp=18&oh=a506d86050ddafff7ea36394c6244507&oe=5F91522F',
                id: 2,
                linkURL:"hats"
            },
            {
                title: "accessories",
                url:'https://instagram.fybz2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/73446502_2476137925839252_2504387237142579766_n.jpg?_nc_ht=instagram.fybz2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=YNrF5IL8xkMAX9_XObX&_nc_tp=19&oh=15b602faf1ff38a4857e6775e205fc48&oe=5F94616B',
                id: 3,
                linkURL:"hats"
            },
            {
                title: "mens",
                url:'https://instagram.fybz2-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/87489405_2606726002904702_5147294609477107434_n.jpg?_nc_ht=instagram.fybz2-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DOFbU_q_FCgAX_Gto-k&_nc_tp=19&oh=2db096dd2e400c0cd5680c3c8bfe3e55&oe=5F948A4B',
                size: "large",
                id: 4,
                linkURL:"hats"
            },
            {
                title: "womens",
                url:'https://cdn.shopify.com/s/files/1/1063/1742/files/newnewnew_1000x.jpeg?v=1598389205',
                size:"large",
                id: 5,
                linkURL:"hats"
            }
        ]
}

const directoryReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer