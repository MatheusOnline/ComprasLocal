import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContainerSearch, InputSearch } from "./styled"

import searchIcon from "../../../assets/icons/searchIcon.svg"
import { Button } from "../Button"


export const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!searchTerm) return;

        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    };

    return(
        <ContainerSearch>
            <InputSearch 
                type="text" 
                placeholder="O que você está procurando?" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="contained" palette="primary" icon={true} onclick={handleSearch}>
                <img src={searchIcon} alt="Buscar" />
            </Button>
        </ContainerSearch>
    )
}
 