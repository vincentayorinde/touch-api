import { sanitize } from 'indicative'
import { messages, validatorInstance, sanitizeRules } from '../../utils'

export default {
    addPeople: async (req, res, next) => {
        const rules = {
            voters_id: 'required',
            first_name: 'required|alpha',
            last_name: 'required|alpha',
            positionId: 'required',
            moduleId: 'required|integer',
            electoralId: 'required',
            userId: 'required|integer',
        }

        let data = req.body
        sanitize(data, sanitizeRules)
        try {
            await validatorInstance.validateAll(data, rules, messages)
            next()
        } catch (e) {
            console.log('the people error', e)
            return res.status(400).json({
                message: e,
            })
        }
    },
}
