import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContainerSearch, ButtonSearch, InputSearch } from "./styled"

import searchIcon from "../../assets/icons/searchIcon.svg"

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
            <ButtonSearch onClick={handleSearch}>
                <img src={searchIcon} alt="Buscar" />
            </ButtonSearch>
        </ContainerSearch>
    )
}
 