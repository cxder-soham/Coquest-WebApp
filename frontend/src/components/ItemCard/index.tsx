import * as React from 'react';
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardHeader from "@mui/material/CardHeader";
import Typography from '@mui/material/Typography';
import ItemMenu from '../ItemMenu';
import ItemModal from '../ItemModal';
import { Item } from '../ItemList';

const CardImage = styled(CardMedia)({
    cursor: 'pointer'
});

const ItemHeader = styled(CardHeader)({
    padding: '10px 18px'
});

const TaskName = styled(Typography)({
    fontWeight: 400,
    fontSize: 12
});

const ItemName = styled(Typography)({
    fontWeight: 600,
    fontSize: 16
});

const CustomCard = styled(Card)({
    height: 254,
    width: 248.43,
});

type ItemCardProps = {
    item: Item,
};

const ItemCard = ({
    item,
}: ItemCardProps) => {
    const [isItemModalOpen, setIsItemModalOpen] = React.useState<boolean>(false);
    return (
        <CustomCard>
            <ItemModal
                key={item.itemID}
                item={item}
                open={isItemModalOpen}
                onClose={() => setIsItemModalOpen(false)}
            />

            <CardImage
                onClick={() => setIsItemModalOpen(true)}>
                <img src={item.image}
                    height="185"
                />
            </CardImage>
            <ItemHeader
                action={
                    <ItemMenu
                        item={item}
                    />
                }
                title={<TaskName>PROGRAM OR TASK NAME</TaskName>}
                subheader={<ItemName>{item.itemName}</ItemName>}
            />
        </CustomCard>
    );
}

export default ItemCard;

