import request from 'superagent'


apiImgReq = `https://maps.googleapis.com/maps/api/staticmap?center=${latLong}&zoom=${zoom}&scale=1&size=600x300&maptype=satellite&format=png&visual_refresh=true&key=AIzaSyAHciFTN54JS1w-iheiqpAN47wvNbx889I`

randy = () => {
	return rand = Math.floor(Math.random() * 10) + 1
}

export function getPlaceName(randy) {
	return request.get('/api')
		.then(
			res => {
				console.log(res.body)
				return res.body
			}
		)
}