import React, {FC} from 'react';
import './Skills__item.scss'

interface SkillsItemProps {
    items: string[];
}

const SkillsItem: FC<SkillsItemProps> = ({items}) => {
    return (
        <>
            {items.map(item => {
                return <div className="skills__item">
                    {item}
                </div>

            })}
        </>
    );
};

export default SkillsItem;