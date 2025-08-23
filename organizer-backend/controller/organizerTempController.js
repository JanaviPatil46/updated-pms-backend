const OrganizerTemplate = require('../models/organizerTempModel');
const mongoose = require("mongoose");

//get all OrganizerTemplate
const getOrganizerTemplates = async (req, res) => {
  try {
    const OrganizerTemplates =  await OrganizerTemplate.find({}).sort({ createdAt: -1 });

    res.status(200).json({ message: "Organizer Template retrieved successfully", OrganizerTemplates })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

//Get a single OrganizerTemplate
const getOrganizerTemplate = async (req, res) => {
  try {
    const organizerTemplate = await OrganizerTemplate.findById(req.params.id);
    if (!organizerTemplate) {
      return res.status(404).send();
    }
    res.status(200).json({ message: "Organizer Template retrieved successfully", organizerTemplate })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

//POST a new OrganizerTemplate 
// const createOrganizerTemplate = async (req, res) => {
//   try {
//     const { templatename, organizerName, sections,organizersettings, active } = req.body;
//     try {
//       // Check if a task template with similar properties already exists
//       const existingTemplate = await OrganizerTemplate.findOne({ templatename });

//       if (existingTemplate) {
//         return res.status(200).json({ error: "Organizer Template already exists" });
//       }
//       // If no existing template is found, create a new one
//       const newOrganizerTemplate = await OrganizerTemplate.create({ templatename, organizerName, sections, organizersettings,active });

//       return res.status(200).json({ message: "Organizer Template created successfully", newOrganizerTemplate });
//     } catch (error) {
//       console.error("Error creating Organizer Template:", error);
//       return res.status(500).json({ error: "Error creating Organizer Template" });
//     }

//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

const createOrganizerTemplate = async (req, res) => {
  const { templatename, ...rest } = req.body;

  try {
    const organizerTemplate = await OrganizerTemplate.findOneAndUpdate(
      { templatename },
      { ...rest },
      {
        upsert: true,
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );

    const wasCreated = organizerTemplate.isNew;
    const message = wasCreated
      ? "Organizer Template created successfully"
      : "Organizer Template created successfully";

    return res.status(wasCreated ? 201 : 200).json({ message, organizerTemplate });

  } catch (error) {
    console.error("Error creating/updating OrganizerTemplate:", error);
    return res.status(500).json({
      error: "Error creating/updating OrganizerTemplate",
      details: error.message,
    });
  }
};

//delete a OrganizerTemplate

const deleteOrganizerTemplate = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid OrganizerTemplate ID" });
  }

  try {
    const deletedOrganizerTemplate = await OrganizerTemplate.findByIdAndDelete({ _id: id });
    if (!deletedOrganizerTemplate) {
      return res.status(404).json({ error: "No such OrganizerTemplate" });
    }
    res.status(200).json({ message: "OrganizerTemplate deleted successfully", deletedOrganizerTemplate });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



//update a new OrganizerTemplate 
const updateOrganizerTemplate = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid TaskTemplate ID" });
  }

  try {
      const updatedOrganizerTemplate = await OrganizerTemplate.findOneAndUpdate(
          { _id: id },
          { ...req.body },
          { new: true }
      );

      if (!updatedOrganizerTemplate) {
          return res.status(404).json({ error: "No such OrganizerTemplate" });
      }

      res.status(200).json({ message: "OrganizerTemplate Updated successfully", updatedOrganizerTemplate });
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
};

const checkTemplateNameExists = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ exists: false, message: 'Name is required' });
  }

  try {
    const template = await OrganizerTemplate.findOne({ templatename: { $regex: `^${name.trim()}$`, $options: 'i' } });

    if (template) {
      return res.json({ exists: true });
    } else {
      return res.json({ exists: false });
    }
  } catch (error) {
    console.error('Error checking template name:', error);
    return res.status(500).json({ exists: false, message: 'Server error' });
  }
};

// Duplicate Organizer Template
const duplicateOrganizerTemplate = async (req, res) => {
  try {
    const { id } = req.params; // templateId passed in URL

    // Find the original template
    const templateToDuplicate = await OrganizerTemplate.findById(id);
    if (!templateToDuplicate) {
      return res.status(404).json({ error: "Template not found" });
    }

    // Convert to plain object and remove _id + timestamps
    const templateObj = templateToDuplicate.toObject();
    delete templateObj._id;
    delete templateObj.createdAt;
    delete templateObj.updatedAt;

    // Generate new name (e.g. "Template (Copy)" / "Template (Copy 2)")
    let newName = `${templateToDuplicate.templatename} (Copy)`;
    const existingCopies = await OrganizerTemplate.countDocuments({
      templatename: new RegExp(`^${templateToDuplicate.templatename} \\(Copy`, "i"),
    });
    if (existingCopies > 0) {
      newName = `${templateToDuplicate.templatename} (Copy ${existingCopies + 1})`;
    }

    // Create new template
    const duplicatedTemplate = await OrganizerTemplate.create({
      ...templateObj,
      templatename: newName,
      sections: templateObj.sections.map(section => ({
        ...section,
        id: new Date().getTime().toString() + section.id, // regenerate section id
      })),
    });

    return res
      .status(201)
      .json({ message: "Organizer Template duplicated successfully", organizerTemplate: duplicatedTemplate });

  } catch (error) {
    console.error("Error duplicating OrganizerTemplate:", error);
    return res.status(500).json({
      error: "Error duplicating OrganizerTemplate",
      details: error.message,
    });
  }
};

module.exports = {
  createOrganizerTemplate,
  getOrganizerTemplate,
  getOrganizerTemplates,
  deleteOrganizerTemplate,
  updateOrganizerTemplate,
  checkTemplateNameExists,duplicateOrganizerTemplate
}