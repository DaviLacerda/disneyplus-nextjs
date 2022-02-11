import styled from 'styled-components';

export const WatchContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    width:100%;
    min-height:100vh;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:12px;

    font-family:'Nunito', sans-serif;

    .watchlist__icon{
        background-image: url(https://static-assets.bamgrid.com/product/disneyplus/images/empty-watchlist-icon.4b3acd54b63178bd38f31ea3b9d6526d.svg);
        fill:#fff;
        width:120px;
        height:120px;
    }
`;