import Afip from '@afipsdk/afip.js';
import ping from 'ping';

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

export const checkHostsStatus = async (req, res) => {
    const { hosts } = req.body;
    if (!Array.isArray(hosts)) {
        return res.status(400).json({ error: 'hosts debe ser un array' });
    }
    const results = await Promise.all(
        hosts.map(async (host) => {
            try {
                const result = await ping.promise.probe(host);
                return { host, alive: result.alive };
            } catch (e) {
                return { host, alive: false, error: e.message };
            }
        })
    );
    res.json({ results });
};