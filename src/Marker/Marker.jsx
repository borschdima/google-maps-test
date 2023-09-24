import markerPin from './marker-pin.png';

const Marker = ({ className, lat, lng, markerId, onClick, ...props }) => {
  return (
    <img
      className={className}
      src={markerPin}
      // eslint-disable-next-line react/no-unknown-property
      lat={lat}
      // eslint-disable-next-line react/no-unknown-property
      lng={lng}
      onClick={(e) => (onClick ? onClick(e, { markerId, lat, lng }) : null)}
      style={{ cursor: 'pointer', fontSize: 40 }}
      alt={markerId}
      {...props}
    />
  );
};

export default Marker;
