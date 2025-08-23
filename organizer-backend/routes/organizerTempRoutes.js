const express = require('express')
const router = express.Router()
const { checkTemplateNameExists,getOrganizerTemplate, getOrganizerTemplates, createOrganizerTemplate, deleteOrganizerTemplate, updateOrganizerTemplate,duplicateOrganizerTemplate } = require('../controller/organizerTempController')

router.get('/organizertemplate', getOrganizerTemplates)
router.get('/organizertemplate/:id', getOrganizerTemplate)
router.post('/organizertemplate', createOrganizerTemplate)
router.delete('/organizertemplate/:id', deleteOrganizerTemplate)
router.patch('/organizertemplate/:id', updateOrganizerTemplate)

router.get('/check-name', checkTemplateNameExists);

router.post("/organizertemplate/duplicate/:id", duplicateOrganizerTemplate);



module.exports = router