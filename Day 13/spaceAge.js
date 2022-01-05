const spaceAge = (seconds) => {

	const yearsInAllPlanets = {
		Mercury: parseFloat((seconds/(0.2408467*31557600)).toFixed(2)),
		Venus: parseFloat((seconds/(0.61519726*31557600)).toFixed(2)),
		Earth:  parseFloat((seconds/(1*31557600)).toFixed(2)),
		Mars: parseFloat((seconds/(1.8808158*31557600)).toFixed(2)),
		Jupiter:  parseFloat((seconds/(11.862615*31557600)).toFixed(2)),
		Saturn: parseFloat((seconds/(29.447498*31557600)).toFixed(2)),
		Uranus:  parseFloat((seconds/(84.016846*31557600)).toFixed(2)),
		Neptune: parseFloat((seconds/(164.79132*31557600)).toFixed(2)),
	}

	return yearsInAllPlanets
}
console.log(spaceAge(Math.round(Math.random() * 99999999)))