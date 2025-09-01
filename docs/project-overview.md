# Project Overview

## Project Model Canvas

The Educado project follows a comprehensive project model focused on educating waste pickers through simple courses.

### Key Components

- **Smart Objective**: Educate waste pickers with simple courses
- **Stakeholders**: Waste pickers, educational institutions, environmental organizations
- **Team**: AAU CCT/Software (Denmark) team
- **Deliverables**: Mobile application for iOS and Android platforms

## MoSCoW Prioritization

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '20px 0'}}>

<div style={{
  backgroundColor: 'var(--ifm-color-danger-contrast-background)', 
  border: '3px solid var(--ifm-color-danger)',
  borderRadius: '12px', 
  padding: '20px',
  boxShadow: '0 4px 8px rgba(244, 67, 54, 0.2)',
  color: 'var(--ifm-font-color-base)'
}}>
<h3 style={{color: 'var(--ifm-color-danger)', margin: '0 0 16px 0', fontSize: '1.5em'}}>🔴 Must Have</h3>

**Core Educational Features:**
- Educate waste pickers through simple courses
- Follow WAGC guidelines (low-level smartphones)  
- User identification (for tracking progress)
- Certificate page

**Gamification & Engagement:**
- Design at least 4 types of gamification
- Up-to-date content guide for gamification
- Duolingo-like approach to courses
- User progress tracking must be shown

**User Experience:**
- Simple onboarding/tutorial
- Implement at least 1 games
- 3rd party video course platform

</div>

<div style={{
  backgroundColor: 'var(--ifm-color-warning-contrast-background)', 
  border: '3px solid var(--ifm-color-warning)',
  borderRadius: '12px', 
  padding: '20px',
  boxShadow: '0 4px 8px rgba(255, 152, 0, 0.2)',
  color: 'var(--ifm-font-color-base)'
}}>
<h3 style={{color: 'var(--ifm-color-warning-dark)', margin: '0 0 16px 0', fontSize: '1.5em'}}>🟡 Should Have</h3>

**Authentication & Personalization:**
- User authentication
- Detailed onboarding/tutorial
- Personas present throughout the app

**Interaction Design:**
- Clear micro interactions
- Course feedback

</div>

<div style={{
  backgroundColor: 'var(--ifm-color-success-contrast-background)', 
  border: '3px solid var(--ifm-color-success)',
  borderRadius: '12px', 
  padding: '20px',
  boxShadow: '0 4px 8px rgba(76, 175, 80, 0.2)',
  color: 'var(--ifm-font-color-base)'
}}>
<h3 style={{color: 'var(--ifm-color-success-dark)', margin: '0 0 16px 0', fontSize: '1.5em'}}>🟢 Could Have</h3>

**Enhanced Features:**
- Explore courses based on interests (intro-quiz)
- Streaks of days where app has been used
- Leaderboard
- Text-to-speech
- Access courses offline

</div>

<div style={{
  backgroundColor: 'var(--ifm-color-secondary-contrast-background)', 
  border: '3px solid var(--ifm-color-secondary)',
  borderRadius: '12px', 
  padding: '20px',
  boxShadow: '0 4px 8px rgba(158, 158, 158, 0.2)',
  color: 'var(--ifm-font-color-base)'
}}>
<h3 style={{color: 'var(--ifm-color-secondary-dark)', margin: '0 0 16px 0', fontSize: '1.5em'}}>⚫ Won't Have</h3>

**Excluded Features:**
- Point system
- Purely generated AI Videos

</div>

</div>

## Impact vs Effort Analysis

<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gap: '20px',
  margin: '40px 0',
  height: '500px'
}}>

<div style={{
  backgroundColor: 'var(--ifm-color-success-contrast-background)',
  border: '3px solid var(--ifm-color-success)',
  borderRadius: '12px',
  padding: '20px',
  color: 'var(--ifm-font-color-base)',
  display: 'flex',
  flexDirection: 'column'
}}>
<h4 style={{color: 'var(--ifm-color-success-dark)', margin: '0 0 16px 0', textAlign: 'center'}}>🚀 High Impact, Low Effort</h4>
<div style={{fontSize: '0.9em'}}>

**Quick Wins:**
- Simple onboarding/tutorial
- Design 4 types of gamification
- Up to date content guide
- User progress tracking

</div>
</div>

<div style={{
  backgroundColor: 'var(--ifm-color-warning-contrast-background)',
  border: '3px solid var(--ifm-color-warning)',
  borderRadius: '12px',
  padding: '20px',
  color: 'var(--ifm-font-color-base)',
  display: 'flex',
  flexDirection: 'column'
}}>
<h4 style={{color: 'var(--ifm-color-warning-dark)', margin: '0 0 16px 0', textAlign: 'center'}}>🎯 High Impact, High Effort</h4>
<div style={{fontSize: '0.9em'}}>

**Major Projects:**
- 3rd party video platform integration
- Implement at least 1 games
- Duolingo-like approach to courses
- Access courses offline

</div>
</div>

<div style={{
  backgroundColor: 'var(--ifm-color-info-contrast-background)',
  border: '3px solid var(--ifm-color-info)',
  borderRadius: '12px',
  padding: '20px',
  color: 'var(--ifm-font-color-base)',
  display: 'flex',
  flexDirection: 'column'
}}>
<h4 style={{color: 'var(--ifm-color-info-dark)', margin: '0 0 16px 0', textAlign: 'center'}}>🔧 Low Impact, Low Effort</h4>
<div style={{fontSize: '0.9em'}}>

**Fill-ins:**
- Certificate page
- User identification for tracking
- Clear micro interactions
- Text-to-speech

</div>
</div>

<div style={{
  backgroundColor: 'var(--ifm-color-danger-contrast-background)',
  border: '3px solid var(--ifm-color-danger)',
  borderRadius: '12px',
  padding: '20px',
  color: 'var(--ifm-font-color-base)',
  display: 'flex',
  flexDirection: 'column'
}}>
<h4 style={{color: 'var(--ifm-color-danger)', margin: '0 0 16px 0', textAlign: 'center'}}>⚠️ Low Impact, High Effort</h4>
<div style={{fontSize: '0.9em'}}>

**Questionable:**
- Purely generated AI Videos
- Advanced leaderboard system

</div>
</div>

</div>

## Priority Explanation

The MoSCoW method helps prioritize features based on business value and project constraints:

- **Must Have** (60%): Critical features without which the project fails
- **Should Have** (20%): Important features that add significant value  
- **Could Have** (20%): Nice-to-have features if time and budget allow
- **Won't Have**: Features explicitly excluded from current scope