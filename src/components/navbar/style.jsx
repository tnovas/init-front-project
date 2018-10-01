const styles = (theme) => ({
	navbar: {
		backgroundColor: '#00000054'
	},
	brand: {
		[theme.breakpoints.up('sm')] : {
			marginLeft: '10vw'
		},
    	flexGrow: 1
	},
	text: {
		color: theme.palette.text.secondary
    },
    link: {
        padding: theme.spacing.unit,
    }
});

export default styles;