import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckOutButton from "./CheckoutButton";
const StyledTodayItem = styled.li`
	display: grid;
	grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
	gap: 1.2rem;
	align-items: center;

	font-size: 1.4rem;
	padding: 0.8rem 0;
	border-bottom: 1px solid var(--color-grey-100);

	&:first-child {
		border-top: 1px solid var(--color-grey-100);
	}
`;

const Guest = styled.div`
	font-weight: 500;
`;
function TodayItem({ activity }) {
	const { id, status, Guests, numNights } = activity;

	return (
		<StyledTodayItem>
			{status === "unconfirmed" && <Tag $type="green">Arriving</Tag>}
			{status === "checked-in" && <Tag $type="blue">Departing</Tag>}
			<Flag src={Guests.countryFlag} alt={`Flag of ${Guests.nationality}`} />
			<Guest>{Guests.fullName}</Guest>
			{/* <div>{numNights} nights</div> */}
			{status === "unconfirmed" && (
				<Button
					as={Link}
					to={`/checkin/${id}`}
					$type="small"
					$variation="primary">
					Check in
				</Button>
			)}
			{status === "checked-in" && <CheckOutButton bookingId={id} />}
		</StyledTodayItem>
	);
}

export default TodayItem;
