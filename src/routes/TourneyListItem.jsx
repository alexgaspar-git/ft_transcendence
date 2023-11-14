import { Accordion } from "react-bootstrap";

const TourneyListItem = ({ tournament }) => {
    return (
        <Accordion defaultActiveKey="0" className="tourney-accordion">
            <Accordion.Item>
                <Accordion.Header>
                    <div className="tourney-accordion-header">
                        <span>{tournament.players.length}/{tournament.max}</span>
                        <span>{tournament.name}</span>
                        {tournament.isActive ? <div className="btn btn-primary">Open</div> : <div className="btn btn-secondary">Closed</div>}
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="tourney-accordion-body">
                        <span>
                            Next Match: {tournament.p1 && tournament.p2 ? `${tournament.p1} vs ${tournament.p2}` : 'Pending'}
                        </span>
                        <div className="tourney-accordion-body-players">
                            <span>Players: </span>
                            <ul>
                                {tournament.players.map((player, index) => (
                                    <li key={index}>{player}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="btn btn-success">Join</div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default TourneyListItem;