import { Container } from "./waterfall.style";

type Props = {
  activity: any;
};

const Waterfall = (props: Props) => {
  const { activity } = props;
  console.log("waterfall", activity);
  return (
    <Container>
      <div>name</div>
      <ul>
        <li>
          <dl>
            <dt>distance</dt>
            <dd>11</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>pace</dt>
            <dd>5:40</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>duration</dt>
            <dd>58m 39s</dd>
          </dl>
        </li>

        <li>
          <dl>
            <dt>average_heartrate</dt>
            <dd>11</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>average_cadence</dt>
            <dd>5:40</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>kilojoules</dt>
            <dd>58m 39s</dd>
          </dl>
        </li>
      </ul>
    </Container>
  );
};

export default Waterfall;
