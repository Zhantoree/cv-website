import React, {FC} from 'react';
import './Skills__item.scss'

interface SkillsItemProps {
    item: string;
}

const SkillsItem: FC<SkillsItemProps> = ({item}) => {
    return (
        <>
                <div className="skills__item">
                    {item}
                </div>
        </>
    );
};

export default SkillsItem;