import { sanitize } from 'indicative'
import { messages, validatorInstance, sanitizeRules } from '../../utils'

export default {
    addDue: async (req, res, next) => {
        const rules = {
            peopleId: 'required|integer',
            positionId: 'required|integer',
            amount: 'required|integer',
            purpose: 'required',
            type: 'required|alpha',
            from: 'required',
            to: 'required',
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
