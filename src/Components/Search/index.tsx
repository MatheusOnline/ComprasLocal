import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContainerSearch, InputSearch } from "./styled"
import { Button } from "../Button"
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
            <Button iconOnly={true} onclick={handleSearch}>
                <img src={searchIcon} alt="Buscar" />
            </Button>
        </ContainerSearch>
    )
}
 