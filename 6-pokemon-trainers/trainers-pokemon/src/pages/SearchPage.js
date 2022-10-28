import React from "react";
import Card from "../components/Card";
import SearchFilters from "../components/SearchFilters";
import ListCard from "../components/ListCard";

const trainerArray =[{
    name: 'Ash Ketchum',
    region: 'Kanto',
    rank:2,
    team:[
        {name: 'Pikachu', level:100},
        {name: 'Greninja', level:80}
    ],
    history: 'lalalala'
},
{
    name: 'Misty',
    region: 'Kanto',
    rank:24,
    team:[
        {name: 'Staryu', level:70},
        {name: 'Psyduck', level:100}
    ],
    history: 'lalalala'
}];

function SearchPage() {
    return (
        <React.Fragment>
            <SearchFilters/>
            <ListCard>
                {
                    trainerArray.map((trainer,index) =><Card key={index} trainer={trainer}/>)
                }
            </ListCard>
        </React.Fragment>
    );
}

export default SearchPage;