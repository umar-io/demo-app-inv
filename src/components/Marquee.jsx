export default function Marquee(){
    const frameStyle ={
        border : '0px',
    }
    return(
       <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="  className="coinlibwidget" style={frameStyle}></iframe>
    );
}