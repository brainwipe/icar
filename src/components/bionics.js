import React from 'react'
import BionicsList from '../containers/bionicslist'
import { Grid, Cell } from 'react-mdl'

const Bionics = () => (
	<Grid className="demo-grid-1">
    	<Cell col={12}>
    		
    		</Cell>
    			
        <Cell col={4}>
    		<BionicsList>
    		</BionicsList>
        </Cell>
        <Cell col={4}>
        </Cell>
        <Cell col={4}>
        </Cell>
    </Grid>
)

export default Bionics