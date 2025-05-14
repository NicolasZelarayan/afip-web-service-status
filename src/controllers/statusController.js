import Afip from '@afipsdk/afip.js';

const afip = new Afip({ CUIT: 2036420516 }); // Replace with your CUIT

export const getServerStatus = async (req, res) => {
    try {
        const serverStatus = await afip.RegisterScopeThirteen.getServerStatus();
        res.status(200).json({
            message: 'Server status retrieved successfully',
            data: serverStatus
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving server status',
            error: error.message
        });
    }
};