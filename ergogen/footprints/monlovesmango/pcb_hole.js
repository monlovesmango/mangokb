module.exports = {
  params: {
    class: 'HOLE',
    diam: 0
  },
  body: p => `
    (module HOLE_M2_TH (layer F.Cu) (tedit 5A52E4A3) 
      ${p.at /* parametric position */}   
      ${'' /* footprint reference */}

      (pad "" np_thru_hole circle (at 0 0 90) (size ${p.diam} ${p.diam}) (drill ${p.diam}) (layers *.Cu *.Mask B.SilkS) (clearance 0.3)))
  `
}