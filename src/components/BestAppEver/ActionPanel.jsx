import React, {useState} from "react";
import styles from "./BestAppEver.module.css";
import ActionButton from "./ActionButton";
import {useRouter} from "next/navigation";

const ActionPanel = ({comics,setPublisher, onDeleteComic, selectedComic}) => {
    const router = useRouter();
    const publications = [...new Set(comics.map((comic) => comic.publisher))];
    const [showDropdown, setShowDropdown] = useState(false);

    const handleInputNavigation = (action) => {
        if (action === "Add") {
            router.push("/input?action=add");
        } else if (action === "Update") {
            if (selectedComic !== null) {
                router.push(`/input?action=update&comicId=${selectedComic}`);
            } else {
                alert("Please select a comic to update");
            }
        }
    };

    const actions = [
        {Name: "Update", onClick: () => handleInputNavigation("Update")},
        {Name: "Add", onClick: () => handleInputNavigation("Add")},
        {Name: "Remove", onClick: onDeleteComic},
    ];

    return (
        <div className={styles.actionContainer}>
            {actions.map((action) => (
                <ActionButton key={action.Name} label={action.Name} onClick={action.onClick}/>
            ))}
            <ActionButton label="FilterBy" onClick={() => setShowDropdown(!showDropdown)}/>
            {showDropdown && (
                <div className={styles.dropdown}>
                    <select onChange={(e) => setPublisher(e.target.value)}>
                        <option value="">All Publishers</option>
                        {publications.map((publisher, index) => (
                            <option key={index} value={publisher}>
                                {publisher}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};

export default ActionPanel;